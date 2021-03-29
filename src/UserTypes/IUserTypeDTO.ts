import { TypeGroup } from "..";

export default interface IUserTypeDTO {
    id?: number,
    name: string,
    inviteeIds: string,
    groupId: TypeGroup,
    superTypeId?: number
}