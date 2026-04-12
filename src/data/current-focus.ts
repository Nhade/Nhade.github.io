export const currentFocus = {
	project: 'AntiCopilot',
	projectSlug: 'anticopilot',
	status: 'active' as const,
	lastUpdated: '2026-04-12',
	latestMilestone: 'Review and roadmap tracking integration',
	testingNow: 'The UI responsiveness of the spaced repetition loop and the transition between Task, Reviews, and Roadmap panels in the VS Code extension.',
	biggestBlocker: 'Ensuring the sidebar webview UI remains snappy and doesn\'t freeze when receiving roadmap and task updates from the local agent backend.',
	recentExperiment: 'Refactoring the monolithic VS Code webview to extract inline CSS and JS into separate media assets using asWebviewUri.',
	currentQuestion: 'How to efficiently capture user struggle signals through the IDE without injecting noticeable latency into the coding experience?',
	currentFocus:
		'My main focus right now is stabilizing the UI/UX layer across our React frontend and the VS Code extension. Over the past week, we implemented the FSRS-based review loop and integrated the unified LangGraph agent API. Now, I am wrapping up fixes for sidebar UI freezes and improving webview asset management.',
	hypothesis:
		'Decoupling the webview HTML generation into separate media files and optimizing how the extension resolves assets will fix the UI freezes during tab switching.',
	signalWatching:
		'I am primarily watching whether the VS Code extension smoothly transitions state and updates the roadmap panel without dropping frames or showing a blank page.',
	successCriteria:
		'A successful iteration where the sidebar reliably renders the roadmap, practice interface, and struggle capture MVP without any UI lockups or resource loading errors.',
	openQuestions: [
		'Should we handle the FSRS scheduling solely on the backend, or maintain a synced state on the client to mask latency?',
		'How can we gracefully fall back and guide the user if the LangGraph agent backend is slow to respond to a struggle signal?',
		'What is the optimal threshold for the explicit struggle signal command before it feels too noisy or intrusive?',
	],
	nextUp: [
		'Review and commit unstaged changes across both the frontend and extension repositories.',
		'Polish the explicit struggle signal command user flow and its corresponding UI feedback.',
		'Add more robust API integration guards and data transformation layers.',
	],
	recentChanges: [
		{ date: 'Apr 08', note: 'Extracted API client, transforms, and added response models to backend endpoints.' },
		{ date: 'Apr 07', note: 'Integrated review functionality and roadmap tracking directly into the VS Code extension.' },
		{ date: 'Apr 06', note: 'Refactored extension webview assets and resolved sidebar UI freeze issues.' },
		{ date: 'Apr 06', note: 'Added the FSRS spaced repetition review loop and practice interface.' },
	],
	repoUrl: 'https://github.com/Nhade/anticopilot-frontend',
	projectUrl: '/projects#anticopilot',
	latestWritingHref: '/writing/logs',
	latestWritingLabel: 'Latest build logs',
};
