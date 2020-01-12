import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const reader = new MatchReader(new CsvFileReader('football.csv'));
reader.load();

for (let match of reader.matches) {
  console.log(match);
}
