import { TypeGroup } from "../Enums/TypeGroup";

export default interface IGroup {
    id: TypeGroup,
    inviteDescription: string,
    nodes: number
}