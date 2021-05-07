import { MatchReader } from './MatchReader'
import { Summmary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summmary.winsAnalysisWithHtmlReport('Liverpool');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

