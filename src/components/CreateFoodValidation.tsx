import * as Yup from "Yup";

export const CreateFoodValidation = Yup.object({
  foodName: Yup.string().required(""),
  foodIngredients: Yup.string().required(""),
  foodPrice: Yup.number().required(""),
});
