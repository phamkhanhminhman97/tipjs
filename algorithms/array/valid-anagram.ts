//104ms
function isAnagram(s: string, t: string): boolean {
  s = s.toLowerCase();
  t = t.toLowerCase();

  if (s.length !== t.length) {
    return false;
  }

  let mangS = s.split("").sort();
  let mangT = t.split("").sort();

  for (let i = 0; i < mangS.length; i++) {
    if (mangS[i] !== mangT[i]) {
      return false;
    }
  }

  return true;
}

let qw = isAnagram("aabbbb", "aaaabb");
console.log(qw);
