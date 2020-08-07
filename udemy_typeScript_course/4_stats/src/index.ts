import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// Create an object that statisfies the 'Data Reader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in sth statisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games.`);