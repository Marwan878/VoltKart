import { TIME_FILTERS } from "@constants";
import { supabase, supabaseAdmin } from "@lib/supabase";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { TOrderItem, TOrderStatus } from "@types";

const getMetrics = createAsyncThunk(
  "metrics/getMetrics",
  async (filter: (typeof TIME_FILTERS)[number], thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const now = new Date();
    let startDate;
    switch (filter) {
      case "Day":
        // In the last 24 hours
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      case "Week":
        // In the last 7 days
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 7
        );
        break;
      case "Month":
        // In the last 30 days
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      case "Year":
        // In the last 365 days
        startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
        break;
      default:
        throw new Error("Invalid filter");
    }

    try {
      const [completedOrders, newClientsCount] = await Promise.all([
        getCompletedOrders(startDate.toISOString()),
        getNewClientsCount(startDate.toISOString()),
      ]);

      const totalRevenue = completedOrders.reduce(
        (acc, order) => acc + order.total,
        0
      );

      const timeToRevenue: Record<string, number> = {};

      if (filter === "Day") {
        completedOrders.forEach((order) => {
          const hour = new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
          }).format(new Date(order.created_at));

          timeToRevenue[hour] = (timeToRevenue[hour] ?? 0) + order.total;
        });
      }

      if (filter === "Week") {
        completedOrders.forEach((order) => {
          const day = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
          }).format(new Date(order.created_at));

          timeToRevenue[day] = (timeToRevenue[day] ?? 0) + order.total;
        });
      }

      if (filter === "Month") {
        completedOrders.forEach((order) => {
          const day = new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
          }).format(new Date(order.created_at));

          timeToRevenue[day] = (timeToRevenue[day] ?? 0) + order.total;
        });
      }

      if (filter === "Year") {
        completedOrders.forEach((order) => {
          const month = new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(new Date(order.created_at));

          timeToRevenue[month] = (timeToRevenue[month] ?? 0) + order.total;
        });
      }

      const timeToOrders: Record<string, number> = {};

      if (filter === "Day") {
        completedOrders.forEach((order) => {
          const hour = new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
          }).format(new Date(order.created_at));

          timeToOrders[hour] = (timeToOrders[hour] ?? 0) + 1;
        });
      }

      if (filter === "Week") {
        completedOrders.forEach((order) => {
          const day = new Intl.DateTimeFormat("en-US", {
            weekday: "short",
          }).format(new Date(order.created_at));

          timeToOrders[day] = (timeToOrders[day] ?? 0) + 1;
        });
      }

      if (filter === "Month") {
        completedOrders.forEach((order) => {
          const day = new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
          }).format(new Date(order.created_at));

          timeToOrders[day] = (timeToOrders[day] ?? 0) + 1;
        });
      }

      if (filter === "Year") {
        completedOrders.forEach((order) => {
          const month = new Intl.DateTimeFormat("en-US", {
            month: "short",
          }).format(new Date(order.created_at));

          timeToOrders[month] = (timeToOrders[month] ?? 0) + 1;
        });
      }

      const ordersPlaced = completedOrders.length;
      const avgOrderRate = ordersPlaced > 0 ? totalRevenue / ordersPlaced : 0;

      return {
        totalRevenue,
        ordersPlaced,
        avgOrderRate,
        newClientsCount,
        timeToRevenue: Object.entries(timeToRevenue).map(([time, revenue]) => ({
          time,
          revenue,
        })),
        timeToOrders: Object.entries(timeToOrders).map(([time, orders]) => ({
          time,
          orders,
        })),
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const getCompletedOrders = async (startDate: string): Promise<TOrderItem[]> => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("status", "delivered" as TOrderStatus)
    .gte("created_at", startDate)
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
};

const getNewClientsCount = async (startDate: string) => {
  const { data, error } = await supabaseAdmin.auth.admin.listUsers();

  if (error) {
    console.error(error);
    return 0;
  }

  return data.users.filter(
    (user) => new Date(user.created_at) >= new Date(startDate)
  ).length;
};

export default getMetrics;
