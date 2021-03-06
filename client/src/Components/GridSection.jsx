import React from 'react';
import GridStatistics from './GridStatistics.jsx';
import GridFinancialHealth from "./GridFinancialHealth.jsx"
import Goal from './Goal.jsx';
import IndustryNews from "./IndustryNews.jsx";
import CommentSection from "./CommentSection.jsx";
import UserSection from "./UserSection.jsx";
import PerformanceChart from './PerformanceChart.jsx';

const GridSection = () => {
    return (
        <div className="m-0 container">
            <div className="form-control mb-2">
                <div className="row row-cols-2">
                    <div className="col-6">
                        <GridStatistics />
                    </div>
                    <div className="col-6">
                        <GridFinancialHealth />
                    </div>
                </div>
            </div>
            <div className="form-control mb-2">
                <div className="row row-cols-2">
                    <div className="col-6">
                        <PerformanceChart />
                    </div>
                    <div className="col-6">
                        <Goal />
                    </div>
                </div>
            </div>
            <div className="form-control mb-2">
                <div className="row row-cols-2">
                    <div className="col-6">
                        <IndustryNews />
                    </div>
                    <div className="col-6">
                        <div className="row row-cols-2">
                            <div className="col-7"><CommentSection /></div>
                            <div className="col-5"><UserSection /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GridSection;
