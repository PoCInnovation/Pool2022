import { get } from 'env-var';

export default (name: string, required = true) => get(name).required(required);
