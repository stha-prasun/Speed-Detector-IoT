import { useEffect, useCallback } from "react";
import { useAppDispatch } from "../redux/hooks";
import axios from "axios";
import { TICKET_API_ENDPOINT } from "../utils/constants";
import { setSpeedLog } from "../redux/speedLog";

const useGetAllTickets = (userId?: string) => {
  const dispatch = useAppDispatch();

  const fetchTickets = useCallback(async () => {
    if (!userId) return;

    try {
      const response = await axios.get(
        `${TICKET_API_ENDPOINT}/get/all/${userId}`
      );

      if (response.data?.success) {
        dispatch(setSpeedLog(response.data.tickets));
      }
    } catch (error) {
      console.error("Failed to fetch tickets:", error);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return fetchTickets;
};

export default useGetAllTickets;
