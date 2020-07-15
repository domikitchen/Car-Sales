import { ADD_ITEM, REMOVE_ITEM } from "../actions/btnActions";

export const initalState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};
  
export const btnReducers = (state = initalState, action) => {
    switch(action.type){
        case ADD_ITEM:
            let featurePrice = 0;
            let selectedFeature = {};
            state.additionalFeatures.map(feature => {
                if(feature.id === action.payload){
                    return (featurePrice = feature.price), (selectedFeature = feature);
                }
                else{
                    return 0;
                }
            })
            return  {
                    ...state,
                    additionalPrice: state.additionalPrice + featurePrice,
                    car: {price: state.car.price, name: state.car.name, image: state.car.image, features: [...state.car.features, selectedFeature]},
                    additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload)
                }
        case REMOVE_ITEM:
            let featurePriceRv = 0;
            let selectedFeatureRv = {};
            state.car.features.map(feature => {
                if(feature.id === action.payload){
                    return (featurePriceRv = feature.price), (selectedFeatureRv = feature);
                }
                else{
                    return 0;
                }
            })
            return  {
                    ...state,
                    additionalPrice: state.additionalPrice - featurePriceRv,
                    car: {price: state.car.price, name: state.car.name, image: state.car.image, features: state.car.features.filter(feature => feature.id !== action.payload)},
                    additionalFeatures: [...state.additionalFeatures, selectedFeatureRv]
                }
        default:
            return state;
    }
}