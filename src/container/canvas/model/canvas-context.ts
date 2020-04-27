import { ContextMode } from "../../../constant/canvas";

export default class CanvasContext {
  public constructor(
    public readonly color: string,
    public readonly size: number,
    public readonly mode: ContextMode,
    public readonly begin: boolean
  ) {}
}
