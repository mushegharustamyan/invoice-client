import { IDocument } from "../../utils/types";

export const filter = (data: IDocument[], target: string) => {
  return data.filter((value) => value.status === target);
};
