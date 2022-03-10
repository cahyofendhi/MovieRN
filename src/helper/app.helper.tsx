export const baseImage = 'https://image.tmdb.org/t/p/w500';

export function genreList(genreIds: number[]): String {
  const genreMap: Map<number, string> = new Map([
    [28, 'Action'],
    [12, 'Adventure'],
    [16, 'Animation'],
    [35, 'Comedy'],
    [80, 'Crime'],
    [99, 'Documentary'],
    [18, 'Drama'],
    [10751, 'Family'],
    [10762, 'Kids'],
    [10759, 'Action & Adventure'],
    [14, 'Fantasy'],
    [36, 'History'],
    [27, 'Horror'],
    [10402, 'Music'],
    [9648, 'Mystery'],
    [10749, 'Romance'],
    [878, 'Science Fiction'],
    [10770, 'TV Movie'],
    [53, 'Thriller'],
    [10752, 'War'],
    [37, 'Western'],
    [10763, ''],
    [10764, 'Reality'],
    [10765, 'Sci-Fi & Fantasy'],
    [10766, 'Soap'],
    [10767, 'Talk'],
    [10768, 'War & Politics'],
  ]);
  let maps: string[] = [];
  for (let val of genreIds) {
    let ss = genreMap.get(val);
    maps.push('' + ss);
  }
  return maps.join(', ');
}
