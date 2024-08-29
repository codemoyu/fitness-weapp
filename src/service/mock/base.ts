export const mockRequest = <T>(data: any) => {
  return new Promise<IResData<T>>((resolve, reject) => {
    resolve(data as IResData<T>)
  })
}
