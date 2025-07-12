import type { CallRecord, CallRecordUpdateTagsDto } from '../../models/callRecord.ts';
import { type AxiosResponse } from 'axios';
import { axiosInstance } from '../config.ts';

export async function getCalls(): Promise<CallRecord[]> {
  const response: AxiosResponse<CallRecord[], { error: string }> =  await axiosInstance.get<CallRecord[]>('calls');
  return response.data;
}

export async function getCallById(id?: string): Promise<CallRecord> {
  const response: AxiosResponse<CallRecord, { error: string }> = await axiosInstance.get<CallRecord>(`calls/${id}`);
  return response.data;
}

export async function createCall(call: Partial<CallRecord>): Promise<CallRecord> {
  const response: AxiosResponse<CallRecord, { error: string }> = await axiosInstance.post<CallRecord>('calls', call);
  return response.data;
}

export async function updateCallTags(call: CallRecordUpdateTagsDto): Promise<CallRecord> {
  const response: AxiosResponse<CallRecord, { error: string }> = await axiosInstance.put<CallRecord>(`calls/tags/${call.id}`, call);
  return response.data;
}

export async function deleteCall(id: string): Promise<void> {
  await axiosInstance.delete(`calls/${id}`);
}
