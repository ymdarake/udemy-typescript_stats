import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();

for (let match of reader.data) {
  console.log(match);
}

// for (let match of matches)
