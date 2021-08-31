
let svgs = (x) => {
    switch (x) {
        case 'home':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            )
        case 'messages':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        case 'notifications':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            )
        case 'addNew':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            )
        case 'dropdown':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
            )
        case 'search':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.005 512.005" >
                    <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
                </svg>
            )
        case 'newsfeed':
            return (
                <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            )
        case 'videos':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
            )
        case 'courses':
            return (
                <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                    <polygon points="12 15 17 21 7 21 12 15"></polygon>
                </svg>
            )
        case 'books':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
            )
        case 'blog':
            return (
                <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <rect ry="2" rx="2" height="18" width="18" y="3" x="3"></rect>
                    <line y2="9" x2="21" y1="9" x1="3"></line>
                    <line y2="9" x2="9" y1="21" x1="9"></line>
                </svg>
            )
        case 'groups':
            return (
                <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cy="7" cx="9"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        case 'burger':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M3,12L21,12" ></path>
                    <path d="M3,6L21,6" ></path>
                    <path d="M3,18L21,18" ></path>
                </svg>
            )
        case 'star':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.002 512.002" >
                    <path d="M511.267,197.258c-1.764-5.431-6.457-9.389-12.107-10.209l-158.723-23.065L269.452,20.157
			c-2.526-5.12-7.741-8.361-13.45-8.361c-5.71,0-10.924,3.241-13.451,8.361l-70.988,143.827l-158.72,23.065
			c-5.649,0.82-10.344,4.778-12.108,10.208c-1.765,5.431-0.293,11.392,3.796,15.377l114.848,111.954L92.271,482.671
			c-0.966,5.628,1.348,11.314,5.967,14.671c2.613,1.898,5.708,2.864,8.818,2.864c2.388,0,4.784-0.569,6.978-1.723l141.967-74.638
			l141.961,74.637c5.055,2.657,11.178,2.215,15.797-1.141c4.619-3.356,6.934-9.044,5.969-14.672l-27.117-158.081l114.861-111.955
			C511.56,208.649,513.033,202.688,511.267,197.258z"/>
                </svg>
            )
        case 'smile':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="34.25px" height="34.25px" viewBox="0 0 34.25 34.25">
                    <g>
                        <path d="M17.125,0C7.668,0,0,7.667,0,17.125S7.668,34.25,17.125,34.25c9.459,0,17.125-7.667,17.125-17.125S26.584,0,17.125,0z
                    M23.445,11.422c1.354,0,2.453,1.099,2.453,2.453s-1.1,2.453-2.453,2.453c-1.354,0-2.453-1.099-2.453-2.453
                   S22.091,11.422,23.445,11.422z M10.804,11.422c1.355,0,2.453,1.099,2.453,2.453s-1.098,2.453-2.453,2.453
                   c-1.354,0-2.453-1.099-2.453-2.453S9.451,11.422,10.804,11.422z M26.365,23.079c-2.098,3.046-5.553,4.864-9.24,4.864
                   c-3.689,0-7.145-1.818-9.24-4.865c-0.47-0.682-0.297-1.616,0.386-2.086c0.683-0.471,1.616-0.297,2.086,0.386
                   c1.536,2.233,4.067,3.565,6.769,3.565s5.231-1.332,6.771-3.565c0.47-0.681,1.402-0.854,2.086-0.385
                   C26.662,21.463,26.834,22.396,26.365,23.079z"/>
                    </g>
                </svg>
            )
        case 'capture':
            return (
                <svg height="511pt" viewBox="0 -21 511.98744 511" width="511pt" xmlns="http://www.w3.org/2000/svg">
                    <path d="m133.320312 373.828125c-34.152343 0-64.53125-21.867187-75.5625-54.421875l-.746093-2.453125c-2.601563-8.621094-3.691407-15.871094-3.691407-23.125v-145.453125l-51.753906 172.757812c-6.65625 25.410157 8.511719 51.753907 33.960938 58.773438l329.878906 88.34375c4.117188 1.066406 8.234375 1.578125 12.289062 1.578125 21.246094 0 40.660157-14.101563 46.101563-34.882813l19.21875-61.117187zm0 0" />
                    <path d="m191.988281 149.828125c23.53125 0 42.664063-19.136719 42.664063-42.667969s-19.132813-42.667968-42.664063-42.667968-42.667969 19.136718-42.667969 42.667968 19.136719 42.667969 42.667969 42.667969zm0 0" />
                    <path d="m458.652344.492188h-320c-29.394532 0-53.332032 23.9375-53.332032 53.335937v234.664063c0 29.398437 23.9375 53.335937 53.332032 53.335937h320c29.398437 0 53.335937-23.9375 53.335937-53.335937v-234.664063c0-29.398437-23.9375-53.335937-53.335937-53.335937zm-320 42.667968h320c5.890625 0 10.667968 4.777344 10.667968 10.667969v151.445313l-67.390624-78.636719c-7.148438-8.382813-17.496094-12.863281-28.609376-13.117188-11.050781.0625-21.417968 4.96875-28.5 13.460938l-79.234374 95.101562-25.8125-25.75c-14.589844-14.589843-38.335938-14.589843-52.90625 0l-58.878907 58.859375v-201.363281c0-5.890625 4.777344-10.667969 10.664063-10.667969zm0 0" />
                </svg>
            )
        case 'liveStream':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 400.548 400.548" >
                    <path d="M383.86,99.79c-10.104-4.184-21.731-1.873-29.466,5.86l-51.507,51.512v-31.397c0-22.359-18.13-40.491-40.493-40.491H40.493
	C18.131,85.274,0,103.406,0,125.765v149.018c0,22.359,18.131,40.491,40.493,40.491h221.901c22.363,0,40.493-18.132,40.493-40.491
	v-31.398l51.507,51.512c5.177,5.174,12.088,7.924,19.126,7.924c3.481,0,6.995-0.678,10.34-2.063
	c10.099-4.185,16.688-14.042,16.688-24.978V124.767C400.548,113.831,393.959,103.974,383.86,99.79z M190.309,210.764l-55.191,42.403
	c-2.354,1.812-5.2,2.738-8.06,2.738c-1.991,0-3.99-0.448-5.846-1.363c-4.519-2.226-7.38-6.825-7.38-11.865v-84.807
	c0-5.041,2.861-9.639,7.38-11.864c4.521-2.228,9.911-1.696,13.905,1.375l55.191,42.402c3.26,2.504,5.17,6.381,5.17,10.49
	C195.479,204.383,193.569,208.26,190.309,210.764z"/>
                </svg>
            )
        case 'pen':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" >
                    <g>
                        <g>
                            <path d="M507.604,131.729L380.271,4.396c-5.861-5.861-15.358-5.861-21.22,0l-67.661,67.661c-5.861,5.861-5.861,15.358,0,21.22
			L418.723,220.61c2.93,2.931,6.77,4.397,10.609,4.397s7.679-1.466,10.61-4.397l67.661-67.661
			C513.466,147.087,513.466,137.59,507.604,131.729z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M397.504,241.829L270.171,114.497c-0.187-0.187-0.313-0.416-0.496-0.604l-143.542,71.767
			c-3.282,1.642-5.861,4.44-7.225,7.855L0,490.78l182.374-182.374c-2.808-5.869-4.512-12.357-4.512-19.287
			c0-24.824,20.194-45.019,45.019-45.019s45.019,20.194,45.019,45.019c0,24.824-20.194,45.019-45.019,45.019
			c-6.93,0-13.418-1.704-19.287-4.512L21.22,512l297.267-118.906c3.414-1.363,6.214-3.942,7.855-7.225l71.767-143.542
			C397.92,242.144,397.691,242.017,397.504,241.829z"/>
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M222.88,274.114c-8.279,0-15.006,6.727-15.006,15.006c0,8.279,6.727,15.006,15.006,15.006
			c8.279,0,15.006-6.727,15.006-15.006C237.886,280.841,231.16,274.114,222.88,274.114z"/>
                        </g>
                    </g>
                </svg>
            )
        case 'more':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 477.867 477.867" >
                    <circle cx="68.267" cy="238.933" r="68.267" />
                    <circle cx="238.933" cy="238.933" r="68.267" />
                    <circle cx="409.6" cy="238.933" r="68.267" />
                </svg>
            )
        case 'send':
            return (
                <svg id="Capa_1" enableBackground="new 0 0 465.882 465.882" height="512" viewBox="0 0 465.882 465.882" width="512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m465.882 0-465.882 262.059 148.887 55.143 229.643-215.29-174.674 235.65.142.053-.174-.053v128.321l83.495-97.41 105.77 39.175z" />
                </svg>
            )
        case 'phone':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                    </path>
                </svg>
            )
        case 'videophone':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
            )
        case 'shoppingCard':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 437.812 437.812" >
                    <circle cx="152.033" cy="390.792" r="47.02" />
                    <circle cx="350.563" cy="390.792" r="47.02" />
                    <path d="M114.939,82.024l-16.196-49.11C92.296,13.499,74.267,0.292,53.812,0H18.808C13.037,0,8.359,4.678,8.359,10.449
				s4.678,10.449,10.449,10.449h35.004c11.361,0.251,21.365,7.546,25.078,18.286l65.829,200.098l-4.702,12.016
				c-5.729,14.98-4.185,31.769,4.18,45.453c8.695,13.274,23.323,21.466,39.184,21.943h203.755c5.771,0,10.449-4.678,10.449-10.449
				c0-5.771-4.678-10.449-10.449-10.449H183.38c-8.797-0.304-16.849-5.017-21.42-12.539c-4.932-7.424-5.908-16.796-2.612-25.078
				l6.269-15.674c0.942-2.504,1.124-5.23,0.522-7.837l-3.135-7.837l212.637-21.943c15.482-1.393,28.327-12.554,31.869-27.69
				l21.943-92.473L114.939,82.024z"/>
                </svg>
            )
        case 'chats':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 512 512" >
                    <path d="M255,16C114.39,16,0,116.928,0,241c0,52.412,20.742,103.198,58.491,143.452c7.471,30.806-1.597,63.442-24.097,85.942
			C24.986,479.803,31.639,496,45,496c42.744,0,83.95-16.743,114.565-46.274C189.858,460.536,221.909,466,255,466
			c140.61,0,257-100.928,257-225S395.61,16,255,16z M137,286c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45
			c24.814,0,45,20.186,45,45C182,265.814,161.814,286,137,286z M257,286c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45
			c24.814,0,45,20.186,45,45C302,265.814,281.814,286,257,286z M377,286c-24.814,0-45-20.186-45-45c0-24.814,20.186-45,45-45
			c24.814,0,45,20.186,45,45C422,265.814,401.814,286,377,286z"/>
                </svg>
            )
        case 'scrollUp':
            return (
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 492 492" >
                    <path d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,185.388
			c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844
			l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752
			c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"
                    />
                </svg>
            )
    }
}

const Svg = (props) => {

    return (
        svgs(props.name)
    );
}

export default Svg;