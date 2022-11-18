import { WORK_FLOW } from "../../../constants/actions";

const initialState = {
  data: [
    {
      name: "Rowan Watson",
      email: "magna.sed@yahoo.org",
      creator: "Thanh",
      createdAt: "2022-11-17T09:16:45.082Z",
      startDate: "2022-11-17T09:16:22.183Z",
      endDate: "2022-11-18T09:16:22.183Z",
      id: "MZAgR4K1j",
      workflow: "Intern",
      time: "2022-11-16T23:00:00.838Z",
      nameTask: "Code Fullstack Project NAPA SPA",
      userId: 1,
      taskSalary: 150000,
    },
    {
      name: "Felicia Salazar",
      email: "dictum.sapien.aenean@protonmail.ca",
      creator: "Thanh",
      createdAt: "2022-11-17T09:16:57.335Z",
      startDate: "2022-11-17T09:16:22.183Z",
      endDate: "2022-11-18T09:16:22.183Z",
      id: "O-MAG1f6h",
      workflow: "Intern",
      time: "2022-11-16T23:00:00.838Z",
      nameTask: "Code Fullstack Project NAPA SPA",
      userId: 6,
      taskSalary: 100000,
    },
    {
      name: "Aiko Copeland",
      email: "metus.aliquam.erat@icloud.com",
      creator: "Thanh",
      createdAt: "2022-11-17T09:17:49.606Z",
      startDate: "2022-11-17T09:16:22.183Z",
      endDate: "2022-11-18T09:16:22.183Z",
      id: "16fl-otNw",
      workflow: "Intern",
      time: "2022-11-16T23:00:00.838Z",
      nameTask: "Code Fullstack",
      userId: 2,
      taskSalary: 150000,
    },
    {
      name: "Noah Donaldson",
      email: "sed.molestie@hotmail.ca",
      creator: "Thanh",
      createdAt: "2022-11-17T09:18:00.086Z",
      startDate: "2022-11-17T09:16:22.183Z",
      endDate: "2022-11-18T09:16:22.183Z",
      id: "ukxL2A-tZ",
      workflow: "Intern",
      time: "2022-11-16T23:00:00.838Z",
      nameTask: "Code Fullstack",
      userId: 4,
      taskSalary: 150000,
    },
    {
      name: "Amy Gardner",
      email: "odio.phasellus.at@icloud.ca",
      creator: "Thanh",
      createdAt: "2022-11-17T09:18:10.603Z",
      startDate: "2022-11-17T09:16:22.183Z",
      endDate: "2022-11-18T09:16:22.183Z",
      id: "i3Euc2iFJ",
      workflow: "Intern",
      time: "2022-11-16T23:00:00.838Z",
      nameTask: "Code Fullstack",
      userId: 5,
      taskSalary: 150000,
    },
  ],
};

const workFlowReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case WORK_FLOW.ADD_WORK_FLOW:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case WORK_FLOW.DELETE_WORK_FLOW:
      return {
        ...state,
        data: state?.data?.filter((item) => item?.id !== payload?.id),
      };
    default:
      return state;
  }
};

export default workFlowReducer;
