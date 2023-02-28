import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'chackBalance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'withdraw' : (arg_0: number) => Promise<undefined>,
}
