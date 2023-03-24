// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";

export async function logoutAction() {
  deleteItem({ key: "userName" });

  toast.success("You`ve deleted the acc");

  return redirect("/");
}
