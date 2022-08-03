export interface PostPair
{
   name: string;
   url: string;
}

export const postPair = (_name: string, _url: string) : PostPair => {
  let pair: PostPair = { name: _name, url: _url};
  return pair;
}
