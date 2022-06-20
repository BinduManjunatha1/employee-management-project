const initialState = [
    { id: 0, name: "Test user 1", email: "test1@email.com", phone: 1234567890 },
    { id: 1, name: "Test User 2", email: "test2@test.com", phone: 4567891230 },
  ];

  export const employeeReducer = (state = initialState, action) => 
  {
    switch (action.type)
     {
        case "ADD_EMPLOYEE":
            
            state = [...state, action.payload];
            return state;
        case "DELETE_EMPLOYEE":
                const employeeFilter = state.filter((employee) =>
                  employee.id === action.payload ? null : employee
                );
               state = employeeFilter;
                return state;
       
        case "SEARCH_EMPLOYEE":
                const response=state.filter(employee=>employee.id.toString().includes(action.payload))
                
               console.log(response)
               
               return state;
                 
        default:  return state;
    }
}