"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summmary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summmary = /** @class */ (function () {
    function Summmary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summmary.winsAnalysisWithHtmlReport = function (team) {
        return new Summmary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summmary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summmary;
}());
exports.Summmary = Summmary;
