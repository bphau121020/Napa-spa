import {createSlice} from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [
      {
        id: 1,
        name: "Rowan Watson",
        gender: "M",
        dateOfBirth: "2022-05-14 01:21:17",
        email: "magna.sed@yahoo.org",
        phone: "715-5838",
        address: "8712 Adipiscing, Ave",
        creditCard: "4532 784 23 7341",
        contractType: "Parttime",
        jobPosition: "Intern",
      },
      {
        id: 2,
        name: "Aiko Copeland",
        gender: "F",
        dateOfBirth: "2023-11-02 17:18:45",
        email: "metus.aliquam.erat@icloud.com",
        phone: "663-1156",
        address: "354-2922 Arcu Avenue",
        creditCard: "4822126783245391",
        contractType: "Fulltime",
        jobPosition: "CTO",
      },
      {
        id: 3,
        name: "Myra Brennan",
        gender: "M",
        dateOfBirth: "2022-09-01 12:43:32",
        email: "massa.lobortis.ultrices@protonmail.org",
        phone: "413-4239",
        address: "Ap #715-7091 Metus. Road",
        creditCard: "4539521469661255",
        contractType: "Fulltime",
        jobPosition: "CTO",
      },
      {
        id: 4,
        name: "Noah Donaldson",
        gender: "M",
        dateOfBirth: "2022-12-25 03:18:01",
        email: "sed.molestie@hotmail.ca",
        phone: "1-259-685-2522",
        address: "946-7315 Urna. Ave",
        creditCard: "402 40071 48461 319",
        contractType: "Parttime",
        jobPosition: "CEO",
      },
      {
        id: 5,
        name: "Amy Gardner",
        gender: "F",
        dateOfBirth: "2022-03-07 11:45:19",
        email: "odio.phasellus.at@icloud.ca",
        phone: "1-676-439-4667",
        address: "P.O. Box 143, 4217 Interdum. Avenue",
        creditCard: "4485 4783 3796 8426",
        contractType: "Fulltime",
        jobPosition: "IT",
      },
      {
        id: 6,
        name: "Felicia Salazar",
        gender: "M",
        dateOfBirth: "2023-10-20 21:29:47",
        email: "dictum.sapien.aenean@protonmail.ca",
        phone: "251-5722",
        address: "P.O. Box 348, 1118 Eu Street",
        creditCard: "491678 573252 2262",
        contractType: "Parttime",
        jobPosition: "Intern",
      },
      {
        id: 7,
        name: "Kenneth Ballard",
        gender: "M",
        dateOfBirth: "2023-03-05 13:04:55",
        email: "erat.vel@hotmail.com",
        phone: "1-606-852-4566",
        address: "P.O. Box 287, 7825 Magna. Street",
        creditCard: "4556 397 44 6619",
        contractType: "Parttime",
        jobPosition: "Intern",
      },
      {
        id: 8,
        name: "Ocean Irwin",
        gender: "F",
        dateOfBirth: "2022-10-29 02:48:05",
        email: "duis.dignissim@aol.ca",
        phone: "421-6744",
        address: "Ap #227-6865 Diam St.",
        creditCard: "4916 482 46 6684",
        contractType: "Parttime",
        jobPosition: "CTO",
      },
      {
        id: 9,
        name: "Boris Parks",
        gender: "M",
        dateOfBirth: "2023-02-08 12:17:33",
        email: "tempus@aol.couk",
        phone: "655-4723",
        address: "172-1581 Arcu. Street",
        creditCard: "455645 486186 8724",
        contractType: "Parttime",
        jobPosition: "IT",
      },
    ],
    tasks: [
      {
        taskId: "UEI219",
        userId: 1,
        taskName: "rhoncus id, mollis nec, cursus",
        taskSalary: 190000,
        taskStatus: "done",
        taskDate: "2023-07-30 00:23:05",
        taskCreatedBy: "Tan",
      },
      {
        taskId: "EYY917",
        userId: 2,
        taskName: "netus et malesuada fames ac",
        taskSalary: 170000,
        taskStatus: "doing",
        taskDate: "2022-04-28 20:49:09",
        taskCreatedBy: "Tan",
      },
      {
        taskId: "DLF853",
        userId: 3,
        taskName: "tellus sem mollis dui, in",
        taskSalary: 180000,
        taskStatus: "todo",
        taskDate: "2021-11-17 00:00:33",
        taskCreatedBy: "Tan",
      },
      {
        taskId: "QTJ869",
        userId: 4,
        taskName: "Integer vulputate, risus a ultricies",
        taskSalary: 160000,
        taskStatus: "done",
        taskDate: "2022-04-09 17:13:02",
        taskCreatedBy: "Tan",
      },
      {
        taskId: "XIL560",
        userId: 5,
        taskName: "nonummy ac, feugiat non, lobortis",
        taskSalary: 100000,
        taskStatus: "doing",
        taskDate: "2022-04-05 13:55:55",
      },
      {
        taskId: "PHY848",
        userId: 6,
        taskName: "malesuada id, erat. Etiam vestibulum",
        taskSalary: 130000,
        taskStatus: "done",
        taskDate: "2022-07-27 20:15:57",
      },
      {
        taskId: "IDH704",
        userId: 7,
        taskName: "scelerisque neque. Nullam nisl. Maecenas",
        taskSalary: 150000,
        taskStatus: "done",
        taskDate: "2022-10-18 16:36:36",
      },
      {
        taskId: "UTP358",
        userId: 8,
        taskName: "Nam ligula elit, pretium et,",
        taskSalary: 130000,
        taskStatus: "done",
        taskDate: "2021-12-23 15:21:55",
        taskCreatedBy: "Hau",
      },
      {
        taskId: "QOK877",
        userId: 9,
        taskName: "erat semper rutrum. Fusce dolor",
        taskSalary: 180000,
        taskStatus: "done",
        taskDate: "2022-04-14 04:35:02",
        taskCreatedBy: "Hau",
      },
      {
        taskId: "NOQ457",
        userId: 1,
        taskName: "Quisque varius. Nam porttitor scelerisque",
        taskSalary: 120000,
        taskStatus: "done",
        taskDate: "2023-09-20 21:48:49",
        taskCreatedBy: "Nguyen",
      },
      {
        taskId: "VPI823",
        userId: 2,
        taskName: "per conubia nostra, per inceptos",
        taskSalary: 140000,
        taskStatus: "doing",
        taskDate: "2023-04-16 12:55:36",
        taskCreatedBy: "Nguyen",
      },
      {
        taskId: "DYU471",
        userId: 3,
        taskName: "venenatis a, magna. Lorem ipsum",
        taskSalary: 150000,
        taskStatus: "done",
        taskDate: "2022-09-01 09:25:51",
        taskCreatedBy: "Nguyen",
      },
    ],
  },
  reducers: {
    createEmployee: (state, action) => {
      // payload: {employee: {name: ..., phone:...,...}}
      const employee = action.payload?.employee;
      const lastEmployee = state.employees.slice(-1);
      employee.id = lastEmployee.id + 1;
      state.employees.push(employee);
      return state;
    },
    updateEmployee: (state, action) => {
      // payload: {employee: {id: 1, name: ..., phone:...,...}}
      const {
        id,
        name,
        gender,
        dateOfBirth,
        email,
        phone,
        address,
        creditCard,
        contractType,
        jobPosition,
      } = action.payload?.employee;
      const employees = state.employees.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            name: name ? name : value.name,
            gender: gender ? gender : value.gender,
            dateOfBirth: dateOfBirth ? dateOfBirth : value.dateOfBirth,
            email: email ? email : value.email,
            phone: phone ? phone : value.phone,
            address: address ? address : value.address,
            creditCard: creditCard ? creditCard : value.creditCard,
            contractType: contractType ? contractType : value.contractType,
            jobPosition: jobPosition ? jobPosition : value.jobPosition,
          };
        }
        return value;
      });
      state.employees = employees;
      return state;
    },
    deleteEmployee: (state, action) => {
      // payload: {id: 1}
      const id = action.payload?.id;
      const employees = state.employees;
      state.employees = state.employees.filter((value) => value.id !== id);
      return {
        ...state,employees
      };
    },
    createTask: (state, action) => {
      /* payload: {task: {
        userId: 1,
        taskName: "rhoncus id, mollis nec, cursus",
        taskSalary: 190000,
        taskStatus: "done",
        taskDate: "2023-07-30 00:23:05",
        taskCreatedBy: "Tan",} */
      const task = action.payload?.task;
      task.taskId = `NAPA${Math.floor(Math.random() * 1000) + 1000}`;
      state.tasks.push(task);
      return state;
    },
    deleteTask: (state, action) => {
      const taskId = action.payload?.taskId;
      const tasks = state.tasks.filter((value) => value.taskId !== taskId);
      state.tasks = tasks;
      return state;
    },
  },
});

// actions
export const employeeActions = employeeSlice.actions;

// reducer
const employeeReducer = employeeSlice.reducer;
export default employeeReducer;
