import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLoggedInUserOrderAsync,
  selectUserInfo,
  selectUserOrder,
} from "../userSlice";
import { discountedPrice } from "../../../app/constants";

// import styles from "./Counter.module.css";

export default function UserOrders() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrder);
  console.log(orders);
  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(userInfo.id));
  }, [dispatch, userInfo]);

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold mb-5 tracking-tight text-gray-900">
          My Orders
        </h1>
        {orders.map((order) => (
          <div key={order.id}>
            <div className=" mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className=" px-4 py-6 sm:px-6">
                <h1 className="text-4xl font-bold mb-5 tracking-tight text-gray-900">
                  Order #{order.id}
                </h1>
                <h3 className="text-xl font-bold mb-5 tracking-tight text-red-900">
                  Order Status : {order.status}
                </h3>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.product.id}>
                                  {item.product.title}
                                </a>
                              </h3>
                              <p className="ml-4">
                                ${discountedPrice(item.product) * item.quantity}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            {/* <p className="text-gray-500">Qty {item.quantity}</p> */}
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty: {item.quantity}
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex my-2 justify-between text-base font-medium text-gray-900">
                  <p>Total items in this order</p>
                  <p>{order.totalItems} items</p>
                </div>
                <div className="flex my-2 justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${order.totalAmount}</p>
                </div>
                <div className="flex my-4 justify-between text-base font-bold text-gray-800">
                  <p>Shipping Address and Details</p>
                </div>
                <div className="flex justify-between gap-x-6 p-5 border-solid border-2 border-gray">
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src={order.selectedAddress.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        {order.selectedAddress.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {order.selectedAddress.street}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {order.selectedAddress.pincode}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      Phone: {order.selectedAddress.phone}
                    </p>
                    <p className="text-sm leading-6 text-gray-500">
                      {order.selectedAddress.state}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
