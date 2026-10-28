export interface Insight {
  slug: string
  kind: 'article' | 'external'
  title: string
  summary: string
  topic: string
  date?: string
  readingTime?: string
  author?: string
  publisher?: string
  href?: string
  featured?: boolean
  body?: string
}

const demoToProduction = `
Every enterprise has now seen the demo. A model reads a contract, drafts a reply, answers a question about last quarter's numbers. It is impressive, it takes an afternoon to build, and it tells you almost nothing about whether the same capability will survive contact with your business.

The gap between that demo and a system that runs the business is where most enterprise AI budgets quietly disappear. After building production systems for financial institutions, law firms and public bodies, we think the gap comes down to seven things.

## 1. Your data is the specification

Demos run on clean, cooperative inputs. Production runs on scanned PDFs with coffee stains, spreadsheets with merged cells, emails in three languages and the template a regional office invented in 2014.

The only reliable way to know whether a system works is to build it against your real inputs from the first week. That is why our engagements start by assembling a representative sample of the documents, tickets or records the system will actually face, edge cases included.

## 2. Accuracy is a number you agree on

"It works pretty well" is not an acceptance criterion. Before we optimise anything, we build a **golden dataset** with the people who own the process and agree how success is measured: field-level extraction accuracy, resolution rate, false-positive rate, time to answer.

That dataset becomes an evaluation harness that runs on every change. When a model is upgraded, a prompt is edited or a new document type appears, you know within minutes whether quality moved, and in which direction.

## 3. The model is the smallest part of the system

In a typical production deployment, the call to the model is a small fraction of the code. The rest is ingestion, classification, validation rules, retries, review queues, integrations with systems of record, access control, monitoring and cost controls.

Those unglamorous parts decide whether a system can be trusted at 3 a.m. on the last day of the quarter. They are also what most pilots skip.

## 4. Compliance is a feature, not a phase

Under GDPR and the EU AI Act, logging, transparency, data minimisation and human oversight are design requirements, not paperwork to complete after launch. Retrofitting them is expensive; designing them in is cheap.

We treat audit trails, data residency, redaction and explainability as first-class features, so that when legal, risk or a regulator asks how a decision was made, the answer is a link, not a project.

## 5. Humans stay in the loop where it matters

Full automation is rarely the goal. The goal is putting human attention exactly where it creates value. Confidence thresholds route uncertain cases to reviewers; approvals gate irreversible actions; everything else flows straight through.

Done well, this is how accuracy climbs over time: every human correction becomes new evaluation data.

## 6. You should own what you pay for

Production AI should not be a black-box licence. Our clients own the code, the prompts, the evaluation suites and the infrastructure-as-code. Architectures stay model-agnostic, so you can move between frontier and open-weight models as prices, performance and regulation change.

## 7. Unit economics are part of the design

A system that is accurate but costs more per document than the analyst it replaces is not a success. We engineer cost per task from the start, with right-sized models, caching, batching and routing, and we report it next to accuracy.

## A short checklist before you approve a pilot

- Has it been tested on a representative sample of **your** data, including the ugly cases?
- Is there a golden dataset and an agreed accuracy metric?
- What happens when the model is uncertain, and who sees it?
- Where does the data live, and what is logged?
- Who owns the code, prompts and evaluations when the engagement ends?
- What does one processed document, ticket or task cost?

If those questions have clear answers, you are not looking at a demo any more. You are looking at a system that can run part of your business.
`

const sevenOpportunities = `
In today's rapidly evolving business landscape, artificial intelligence is transforming how enterprises operate. After consulting with more than 20 C-level executives in recent months, clear patterns have emerged in how companies are putting AI to work. This article explores seven opportunities that are reshaping the enterprise.

## Voice AI: transforming customer interactions

Voice AI has emerged as a game-changing solution for customer support operations. Companies are implementing intelligent voice agents to:

- Handle routine customer inquiries
- Manage appointment scheduling
- Collect information before a human picks up
- Route complex cases to the right agent
- Provide 24/7 coverage

The most compelling implementations are in healthcare, where AI receptionists are successfully managing front-desk operations, and in retail, where voice agents handle order tracking and customer service.

## Autonomous agents: the new workplace assistant

Autonomous agents are changing how employees access and use company resources. These systems integrate with:

- CRM systems
- Communication tools
- Calendar management
- Knowledge bases
- Internal documentation

The key advantage is instant access to information, reducing dependency on manual processes and accelerating decision-making.

## Employee AI training: the productivity multiplier

Organisations are discovering that AI-trained employees significantly outperform their peers. Effective training programs focus on:

- AI workflow integration
- Advanced prompting techniques
- Multi-modal AI
- Process automation
- Personal productivity

Companies implementing these programs consistently report productivity improvements of 40% or more.

## Self-hosted AI: control and privacy

Data-privacy concerns are driving a shift toward self-hosted AI. Organisations are looking for:

- On-premise model deployment
- Custom model fine-tuning
- Stronger security controls
- Lower latency
- Operational independence

The rise of capable open-weight models such as Llama and Qwen makes this transition increasingly viable.

## Lead generation: AI-powered growth

AI is transforming how companies identify and pursue new business through:

- Automated lead identification
- Intelligent data enrichment
- Real-time qualification
- Predictive scoring
- Personalised outreach

Organisations implementing these systems report significant improvements in conversion rates and sales efficiency.

## Competitive intelligence: real-time market insight

AI-powered competitive analysis gives organisations unprecedented market visibility through:

- Automated competitor monitoring
- Price tracking
- Feature comparison
- Sentiment analysis
- Market-trend identification

This real-time intelligence enables faster, better-informed strategic decisions.

## Data enrichment: the information advantage

AI-driven data enrichment helps organisations maintain accurate, comprehensive databases through:

- Automated validation
- Real-time updates
- Cross-reference verification
- Social-signal integration
- Regulatory compliance checks

These systems run continuously, so teams always work from current, accurate information.

## Conclusion

The enterprise AI landscape is evolving quickly, creating significant opportunities for organisations that move decisively. Whether through better customer interactions, more productive employees or sharper market intelligence, AI is becoming a crucial differentiator.

To stay competitive, organisations should evaluate these opportunities and identify which align with their strategic objectives. Success lies not just in implementing AI, but in doing so thoughtfully and systematically, to create lasting advantage.
`

const dataClassification = `
Data classification is a cornerstone of any effective data-security strategy. With the right technology it drastically improves data protection, streamlines operations and makes compliance demonstrable. Here is how AI is changing the discipline.

## From manual to AI-driven classification

Data classification began as a manual process, pioneered by government and military institutions to safeguard sensitive information. People reviewed and categorised documents by hand according to their sensitivity.

As data volumes exploded and regulation multiplied, manual classification became impractical. Semi-automated systems followed, combining human oversight with rule-based software, but rigid rules and human error limited their accuracy.

Advances in **AI and large language models** have changed what is possible. Modern classification systems interpret the nuance of language and context, accurately identifying sensitive information that rule-based approaches miss.

## Why data classification matters

Organisations can only protect sensitive data if they know what exists, where it lives and how sensitive it is.

### 1. Improving data visibility

Automated classification shows where sensitive data is located and which controls protect it, which is the foundation of every other security measure.

### 2. Reducing the attack surface

A well-executed classification program surfaces redundant and duplicated data. Removing it lowers storage and backup costs and shrinks the surface exposed to breaches.

### 3. Ensuring compliance

Frameworks such as **GDPR**, **CCPA** and **HIPAA** require stringent controls over personal and sensitive data. Automating the classification of personal data, including special categories such as health information, reduces compliance risk and makes it auditable.

## Key data types to classify

- **Personally identifiable information (PII):** names, addresses, identification numbers.
- **Financial information:** bank details, transaction histories, card numbers.
- **Health information (PHI):** medical records and insurance information.
- **Intellectual property:** trade secrets, designs and proprietary methods.
- **Corporate information:** strategies, forecasts and internal methodologies.

## Challenges, and how AI addresses them

### 1. Volume

Manual review cannot keep pace with modern data volumes. AI systems scan and categorise large datasets across environments continuously.

### 2. Unstructured data

Much sensitive data lives in emails, documents and chat. Language models excel at understanding unstructured content in context.

### 3. Evolving data types

New formats appear constantly. Adaptable classification frameworks keep pace without a rewrite.

### 4. Accuracy

Misclassification leads either to exposure or to unnecessary friction. Evaluation against labelled samples keeps accuracy measured rather than assumed.

## Strategies that work

- **Automate with AI** to handle volume and reduce error.
- **Design for flexibility** so new data types and regulations can be absorbed.
- **Prioritise context**, not just patterns, for accurate classification.
- **Measure continuously** with labelled evaluation sets and human review of edge cases.

Combining modern AI with deep expertise in data security turns classification from a periodic project into a continuous, auditable capability.
`

export const insights: Insight[] = [
  {
    slug: 'the-difference-between-an-ai-demo-and-a-production-system',
    kind: 'article',
    title: 'The difference between an AI demo and a system that runs the business',
    summary:
      'Seven things separate an impressive afternoon prototype from AI you can trust at 3 a.m. on the last day of the quarter, plus a checklist to use before you approve your next pilot.',
    topic: 'Field notes',
    date: '2026-10-28',
    readingTime: '7 min read',
    author: 'Allometrik Engineering',
    featured: true,
    body: demoToProduction,
  },
  {
    slug: '7-enterprise-ai-opportunities-from-20-c-level-executives',
    kind: 'article',
    title: '7 enterprise AI opportunities: insights from 20+ C-level executives',
    summary:
      'Patterns from conversations with more than twenty C-level leaders: where enterprises are deploying voice AI, autonomous agents, self-hosted models and AI training today.',
    topic: 'Executive research',
    date: '2024-12-13',
    readingTime: '5 min read',
    author: 'JV Sáez',
    body: sevenOpportunities,
  },
  {
    slug: 'ai-driven-data-classification-for-security-and-compliance',
    kind: 'article',
    title: 'AI-driven data classification for security and compliance',
    summary:
      'Why classification is the foundation of data security, and how language models make it continuous, contextual and auditable across GDPR, CCPA and HIPAA obligations.',
    topic: 'Compliance',
    date: '2024-09-20',
    readingTime: '6 min read',
    author: 'Allometrik Engineering',
    body: dataClassification,
  },
  {
    slug: 'beating-proprietary-models-with-a-quick-fine-tune',
    kind: 'external',
    title: 'Beating proprietary models with a quick fine-tune',
    summary:
      'Running a parallel hyper-parameter grid search across 50+ GPUs on Modal to fine-tune an open embedding model that outperforms OpenAI’s text-embedding-3-small.',
    topic: 'Embeddings',
    publisher: 'Modal',
    href: 'https://modal.com/blog/fine-tuning-embeddings',
  },
  {
    slug: 'embedding-english-wikipedia-in-under-15-minutes',
    kind: 'external',
    title: 'Embedding English Wikipedia in under 15 minutes',
    summary:
      'Using serverless cloud GPUs to embed the whole of English Wikipedia, a demonstration of how far embedding workloads can scale with a few lines of code.',
    topic: 'Infrastructure',
    publisher: 'Modal',
    href: 'https://modal.com/blog/embedding-wikipedia',
  },
  {
    slug: 'rag-is-more-than-just-vector-search',
    kind: 'external',
    title: 'RAG is more than just vector search',
    summary:
      'Why production RAG needs SQL-grade metadata filters alongside semantic search, and how combining lexical and vector retrieval in one database simplifies the stack.',
    topic: 'Retrieval',
    publisher: 'Timescale',
    href: 'https://www.timescale.com/blog/rag-is-more-than-just-vector-search/',
  },
  {
    slug: 'bad-schemas-could-break-your-llm-structured-outputs',
    kind: 'external',
    title: 'Bad schemas could break your LLM structured outputs',
    summary:
      'Benchmarks on GSM8k with GPT-4o and Claude showing how schema design and JSON mode versus structured outputs change accuracy, with practical schema-engineering guidance.',
    topic: 'Structured outputs',
    publisher: 'Instructor',
    date: '2024-09-26',
    href: 'https://python.useinstructor.com/blog/2024/09/26/bad-schemas-could-break-your-llm-structured-outputs/',
  },
  {
    slug: 'smarter-summaries-with-fine-tuning-and-chain-of-density',
    kind: 'external',
    title: 'Smarter summaries with fine-tuning GPT-3.5 and Chain of Density',
    summary:
      'An early demonstration that fine-tuning can deliver large gains on focused tasks. The piece reached #3 on Hacker News.',
    topic: 'Fine-tuning',
    publisher: 'Instructor',
    date: '2023-11-05',
    href: 'https://python.useinstructor.com/blog/2023/11/05/chain-of-density/',
  },
  {
    slug: 'rag-is-more-than-just-embedding-search',
    kind: 'external',
    title: 'RAG is more than just embedding search',
    summary:
      'The limits of embedding-only retrieval, and why scaling beyond a demo requires query understanding and careful metadata filtering.',
    topic: 'Retrieval',
    publisher: 'Instructor',
    date: '2023-09-17',
    href: 'https://python.useinstructor.com/blog/2023/09/17/rag-is-more-than-just-embedding-search/',
  },
]

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug && i.kind === 'article')
}
