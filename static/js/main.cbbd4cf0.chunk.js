(this.webpackJsonptaskreviewswidget=this.webpackJsonptaskreviewswidget||[]).push([[0],{1:function(e,t,a){e.exports={btnStyles:"FeedbackOptions_btnStyles__2TGdA"}},11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=a(4),u=a(5),i=a(6),s=a(9),b=a(7),d=a(10),m=function(e){var t=e.value,a=e.label;return l.a.createElement(l.a.Fragment,null,"Positive feedback"===a?l.a.createElement("p",null,a,": ",t,"%"):l.a.createElement("p",null,a,": ",t))},v=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{label:"Good",value:t}),l.a.createElement(m,{label:"Netural",value:a}),l.a.createElement(m,{label:"Bad",value:n}),l.a.createElement(m,{label:"Total",value:r}),l.a.createElement(m,{label:"Positive feedback",value:c}))},g=a(1),E=a.n(g),k=function(e){var t=e.options,a=e.onLeaveFeedback,n=t.good,r=t.neutral,c=t.bad;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",onClick:a,name:"good",value:n,className:E.a.btnStyles},"Good"),l.a.createElement("button",{type:"button",onClick:a,name:"neutral",value:r,className:E.a.btnStyles},"Netural"),l.a.createElement("button",{type:"button",onClick:a,name:"bad",value:c,className:E.a.btnStyles},"Bad"))},f=a(8),p=a.n(f),h=function(e){var t=e.title,a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",{className:p.a.allTitle},t),a)},F=function(e){var t=e.message;return l.a.createElement("h4",null,t)},y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0},a.countTotalFeedback=function(){var e=a.state;return e.good+e.neutral+e.bad},a.countPositiveFeedbackPercentage=function(){var e=(a.state.good/a.countTotalFeedback()*100).toFixed();return Number(e)},a.handleChange=function(e){var t=e.target.name;a.setState((function(e){return Object(o.a)({},t,e[t]+1)})),a.countTotalFeedback(),a.countPositiveFeedbackPercentage()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{title:"Plese leave feedback"},l.a.createElement(k,{options:this.state,onLeaveFeedback:this.handleChange})),l.a.createElement(h,{title:"Statistic"},this.countTotalFeedback()>0?l.a.createElement(v,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):l.a.createElement(F,{message:"No feedback given"})))}}]),t}(n.Component),P=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null))};c.a.render(l.a.createElement(P,null),document.getElementById("root"))},8:function(e,t,a){e.exports={allTitle:"Section_allTitle__1u7HN"}}},[[11,1,2]]]);
//# sourceMappingURL=main.cbbd4cf0.chunk.js.map