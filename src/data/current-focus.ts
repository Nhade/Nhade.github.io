export const currentFocus = {
	project: 'LoRA Adapter Reuse',
	projectSlug: 'lora-adapter-reuse',
	status: 'active' as const,
	lastUpdated: '2026-09-12',
	latestMilestone: 'MergeBench reproduction with LoRA specialists: plan and code written, first GPU run still pending.',
	testingNow: 'Whether the portability and merge-vs-multitask results hold at other trim densities and merge scales, not only at the one operating point they were measured at.',
	biggestBlocker: 'GPU time. The remaining density × scale check is about an hour on one H100 and the MergeBench reproduction has not run at all; both wait on cluster access scheduled through the lab.',
	recentExperiment: 'Origin × host 2×2: adapters trained on the base model applied to the instruct model and the reverse, three seeds each, plus one adapter trained on the mixed data as the control for merging.',
	currentQuestion: 'When two merge operators score differently, how much of that is the operator and how much is the total norm of the merged update?',
	currentFocus:
		'Since July I have been working at the Institute of Information Science, Academia Sinica (a summer internship, now continued part-time as a research assistant) on one question: once a LoRA adapter is trained, how much of it can be reused? The cross-model transfer half is closed (what moves across is the source model\'s answer pattern, not its capability). The work now is merging several single-task adapters into one host model and measuring what survives.',
	hypothesis:
		'Differences between merge operators may be differences in update norm in disguise. Pinning every arm to the same realized norm before comparing them is the test.',
	signalWatching:
		'Whether any of the portability or merge-vs-multitask results changes sign somewhere in the density × scale grid. If one does, the write-up has to be restated as conditional on the operating point.',
	successCriteria:
		'A MergeBench-style table where every cell has a control arm and a re-derived number, and a clear statement of which results are conditional on the operating point.',
	openQuestions: [
		'Is adapter portability between a base model and its instruct-tuned version symmetric, and does the answer depend on the task?',
		'When merging and multitask training get the same per-task exposure and step budget, how much of the difference between them depends on that budget?',
		'Which of the deviations forced by using LoRA specialists in MergeBench (learning rate, merge precision, a single seed) actually change its normalized-performance ranking?',
	],
	nextUp: [
		'Run the 12 prepared density × scale configurations once cluster time is scheduled.',
		'Clear the MergeBench reproduction gates: dataset access, vLLM, and the two external evaluation harnesses.',
		'Pull the 65 raw evaluation result files off the server so the 2×2 reports can be regenerated locally.',
	],
	recentChanges: [
		{ date: 'Sep 10', note: 'Wrote the internal summary of the whole research line, every headline number re-derived from the raw run metrics.' },
		{ date: 'Sep 03', note: 'Validated the 2×2 portability and merge-vs-multitask reports against the 65 raw run directories.' },
		{ date: 'Aug 28', note: 'Started the MergeBench-with-LoRA reproduction plan.' },
		{ date: 'Aug 24', note: 'Closed the origin × host portability study and the merge-vs-multitask control, three seeds.' },
	],
	repoUrl: undefined as string | undefined,
	projectUrl: '/projects#lora-adapter-reuse',
	latestWritingHref: '/writing/essays',
	latestWritingLabel: 'Latest essays',
};
