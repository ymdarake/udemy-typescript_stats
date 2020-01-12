import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();

for (let match of reader.data) {
  console.log(match);
}

// for (let match of matches)
