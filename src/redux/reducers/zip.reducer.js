const zipReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_ZIP_RESPONSE':
        console.log('in zipReducer')
        console.log(action.payload)
      //   //array to search
      //   console.log(action.payload.results[0].address_components)

      // //filters geo data to return only state name object
      //   let stateInfo = action.payload.results[0].address_components.filter((obj) => {
      //     return obj.types.includes("administrative_area_level_1");
          
      //   })

        return action.payload[0];
        
      //if user changes state, updates the zip reducer
      case 'SET_STATE_RESPONSE':
        console.log(action.payload)
        return action.payload
      case 'UNSET_ZIP_RESPONSE':
        return {};
      default:
        return state;
    }
  };
  
  export default zipReducer;