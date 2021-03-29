import { TypeGroup } from "../Enums/TypeGroup";
import ICollaborator from "./ICollaborator";

export default interface IUserType {
    key: number,
    title: string,
    creatorName: string,
    selected: boolean,
    collaborators: ICollaborator[],
    groupId: TypeGroup,
    superTypeId?: number,
    isLeaf: boolean,
    children: IUserType[]
}