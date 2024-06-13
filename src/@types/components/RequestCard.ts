export type RequestCardComponentProps = {
    acceptAction: (requestId: number, status: number) => {},
    deniedAction: (requestId: number, status: number) => {}
} & RequestCardProps;

export type RequestCardProps = {
    requestId: number
    projectName: string,
    requestType: string,
    students: string,
    description: string,
}
