import { WORK_FLOW } from "../../../constants/actions";

const initialState = {
  data: [
    {
      key: "task 1",
      id: "ZJC7qSfuQ",
      name: "Felicia Salazar",
      email: "dictum.sapien.aenean@protonmail.ca",
      workflow: "INTERN",
      creator: "Thanh (Menter)",
      createdAt: "2014-12-12 23:12:00",
      startDate: "2014-12-12 23:12:00",
      endDate: "2014-12-24 23:12:00",
      nameTask: "Rebuild Old Project With Team Members"
    },
    {
      key: "task 2",
      id: "Y2DLPs-5b",
      name: "Rowan Watson",
      email: "metus.aliquam.erat@icloud.com",
      workflow: "IT",
      creator: "Thanh (Menter)",
      createdAt: "2014-12-10 23:12:00",
      startDate: "2014-12-12 23:12:00",
      endDate: "2014-12-24 23:12:00",
      nameTask: "Code Fullstack Project NAPA SPA"
    },
    {
      key: "task 3",
      id: "sezmXiIUk",
      name: "Myra Brennan",
      email: "massa.lobortis.ultrices@protonmail.org",
      workflow: "CTO",
      creator: "Nhat (Supporter)",
      createdAt: "2014-12-1 23:12:00",
      startDate: "2014-12-1 23:12:00",
      endDate: "2014-12-21 23:12:00",
      nameTask: "Rebuild Old Project With Team Members"
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
