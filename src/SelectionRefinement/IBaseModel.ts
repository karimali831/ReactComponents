interface IBaseModel {
    id: string,
    name: string,
    leftImage?: string,
    rightContent?: JSX.Element,
    disabled?: boolean
}

export default IBaseModel;