(self.webpackChunkstructuredai=self.webpackChunkstructuredai||[]).push([[801],{7307:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(2137);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=n(3552),s=n(7757),o=n.n(s),u=n(7294),c=n(2611),l=n(6742),p=n(2263),h=n(5977),f=n(4303),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={active:t.info.active},n.activate=n.activate.bind(a(n)),n.deactivate=n.deactivate.bind(a(n)),n}(0,i.Z)(t,e);var n=t.prototype;return n.activate=function(){var e=this;fetch(this.props.apiBaseUrl+"/repo/activate/"+this.props.info.id,{credentials:"include"}).then((function(e){return e.json()})).then((function(t){!0===t.active&&e.setState({active:!0})}))},n.deactivate=function(){var e=this;fetch(this.props.apiBaseUrl+"/repo/deactivate/"+this.props.info.id,{credentials:"include"}).then((function(e){return e.json()})).then((function(t){!1===t.active&&e.setState({active:!1})}))},n.render=function(){var e=this.props.info.name,t=u.createElement("button",{onClick:this.activate},"activate");return this.state.active&&(e=u.createElement(l.Z,{to:"/"+this.props.owner+"/"+this.props.info.name},this.props.info.name),t=u.createElement("button",{onClick:this.deactivate},"deactivate")),u.createElement("li",null,e," (stars: ",this.props.info.stargazers_count,", ",this.props.info.topics.join(", "),") ",t)},t}(u.Component),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={displayName:null,name:null,profilePictureUrl:null,company:null,bio:null,blog:null,location:null,twitter_username:null,current_user:!1,repositories:[],apiTokens:[]},n.updateUserData=n.updateUserData.bind(a(n)),n.logout=n.logout.bind(a(n)),n.newToken=n.newToken.bind(a(n)),n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateUserData()},n.updateUserData=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,a=this;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.props.apiBaseUrl+"/user/"+this.props.userName,{credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,Promise.all(n.apiTokens.map(function(){var e=(0,r.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.token&&t.scopes.includes("runner")){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,fetch(a.props.apiBaseUrl+"/runner/status",{headers:{authorization:"token "+t.token},credentials:"include"});case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",Object.assign({},t,{runnerStatus:r}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 8:n.apiTokens=e.sent,console.log({userState:n}),this.setState(n);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.logout=function(){var e=this;fetch(this.props.apiBaseUrl+"/user/logout",{credentials:"include"}).then((function(t){return e.updateUserData()}))},n.newToken=function(){var e=this;fetch(this.props.apiBaseUrl+"/auth/new-token",{credentials:"include"}).then((function(t){return e.updateUserData()}))},n.render=function(){var e,t,n=this;return this.state.current_user!==this.state.displayName?(e=u.createElement(l.Z,{to:"/user"},"log in"),t=""):(e=u.createElement("button",{onClick:this.logout},"log out"),t=u.createElement("button",{onClick:this.newToken},"new")),u.createElement("section",{className:f.Z.profile},u.createElement("div",{className:"container"},u.createElement("div",{className:"row"},u.createElement("div",{className:"col"},u.createElement("img",{src:this.state.profilePictureUrl}),e,u.createElement("ul",null,u.createElement("li",null,"name ",this.state.name," "," (current user: ",this.state.current_user,")"),u.createElement("li",null,"company ",this.state.company),u.createElement("li",null,"bio ",this.state.bio),u.createElement("li",null,"blog ",this.state.blog),u.createElement("li",null,"location ",this.state.location),u.createElement("li",null,"twitter ",this.state.twitter_username),u.createElement("li",null,"tokens ",t," ",this.state.apiTokens.filter((function(e){return e.token})).map((function(e){return JSON.stringify({token:e.token,runnerStatus:e.runnerStatus})})).join(", ")))),u.createElement("div",{className:"col"},u.createElement("h3",null,"Repositories"),u.createElement("ul",null,this.state.repositories.map((function(e){return u.createElement(m,{owner:n.state.displayName,key:e.id,info:e,apiBaseUrl:n.props.apiBaseUrl})})))))))},t}(u.Component);function v(){var e=(0,p.default)().siteConfig,t=(0,h.$B)();return u.createElement(c.Z,{title:t.params.user},u.createElement(d,{apiBaseUrl:e.customFields.apiBaseUrl,userName:t.params.user}))}},4303:function(e,t){"use strict";t.Z={profile:"profile_6ll1"}}}]);