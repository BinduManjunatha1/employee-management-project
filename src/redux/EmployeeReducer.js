const initialState={
    employees:[
        { id: 0, name: "Test user 1", email: "test1@email.com", phone: 1234567890 },
        { id: 1, name: "Test User 2", email: "test2@test.com", phone: 4567891230 },
    ],
    serachedEmployee:[]
}
export const employeeReducer = (state = initialState, action) => 
  {
    switch (action.type)
     {
        case "ADD_EMPLOYEE":
            {
                const prevState = {...state}
              prevState.employees= [...prevState.employees, action.payload];
            return prevState;
            }
        case "DELETE_EMPLOYEE":
               {
                const prevState = {...state}
                const employeeFilter = prevState.employees.filter((employee) =>
                  employee.id === action.payload ? null : employee
                );
                prevState.employees = employeeFilter;
                return prevState;
               }
       
        case "SEARCH_EMPLOYEE":
            {
                const prevState = {...state}
                prevState.serachedEmployee = prevState.employees.filter(employee=>employee.id.toString().includes(action.payload))
                return prevState;
            }
        default:  return state;
    }
}