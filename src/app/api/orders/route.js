import { NextResponse } from "next/server";
import Order from "../../../../models/order";
import connectDB from "../../../../utils/db";

export const POST = async (request) => {
    try {
      await connectDB();
  
      const orderData = await request.json();
      const order = new Order(orderData);
      await order.save();
  
      return new NextResponse(JSON.stringify(order), { status: 201 });
    } catch (error) {
      return new NextResponse(`Error in saving order: ${error.message}`, { status: 500 });
    }
  };