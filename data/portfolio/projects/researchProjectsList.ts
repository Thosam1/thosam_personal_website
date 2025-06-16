import IProject from "./interface_project";

export default function researchProjectsList(): IProject[] {
    return [
        {
            title: 'Bandits Algorithms For Recommendation Systems',
            description: "This project explores bandit algorithms for recommendation systems, from basic strategies like UCB to more advanced linear bandits. After testing on simulated data, we applied the models to real-world Amazon Music reviews. While bandits performed well in controlled settings, linear regression outperformed them in real-world prediction tasks. Still, bandits showed promise in data-scarce environments thanks to their adaptability and online learning capabilities. The study highlights when and where bandits can be effective tools in recommender systems.",
            githubLink: 'https://github.com/Thosam1/BachelorProject',
            demoLink: '',
            pdfLink: 'https://github.com/Thosam1/BachelorProject/blob/main/Spring_2023_semester_projects_RecSys.pdf',
            tags: [
                'Data Science',
                'Research'
            ],
            images: [
                '/portfolio/projects/bandits.png'
            ]
        },
        {
            title: 'Leveraging LLM Ensembles for Robust Sentiment Classification',
            description: 'This project tackles ternary sentiment classification (positive, neutral, negative) on 100K+ labeled sentences. We compare classical ML models to transformer-based architectures like RoBERTa and DeBERTa, and explore preprocessing, ensembling (softmax averaging, majority voting), and data augmentation using LLM-generated paraphrases. Our best model—an ensemble of fine-tuned transformers—achieved an L score of 0.9034 and a weighted F1 score of 0.83.',
            githubLink: 'https://github.com/Thosam1/SentimentClassification',
            demoLink: '',
            pdfLink: 'https://github.com/Thosam1/SentimentClassification/raw/main/CIL_Sentiment_Analysis___Report.pdf',
            tags: [
                'Data Science',
                'Deep learning',
                'LLM',
                'Research'
            ],
            images: [
                '/portfolio/projects/cil_project.png'
            ]
        },
        {
            title: "ICU Mortality Prediction Using Machine Learning and Time-Series Analysis",
            description: "This project leverages the PhysioNet 2012 Challenge dataset to predict ICU patient mortality based on multivariate time-series data from the first 48 hours of ICU stay. We explore classic machine learning models (Random Forest, Logistic Regression), deep learning approaches (LSTM, BiLSTM, Transformers), and representation learning techniques. The study also investigates the use of LLMs for few-shot predictions and evaluates the performance of different feature aggregation methods. Key findings highlight the effectiveness of Random Forest for tabular data and the challenges of applying Transformers and contrastive learning to ICU time-series data.",
            githubLink: 'https://github.com/Thosam1/PhysioNet-ICU-Mortality-Prediction',
            demoLink: '',
            pdfLink: 'https://github.com/Thosam1/PhysioNet-ICU-Mortality-Prediction/raw/main/Machine_Learning_for_Health_Care___Project_Report.pdf',
            tags: [
                'Data Science',
                'Deep learning',
                'LLM',
                'Research'
            ],
            images: [
                '/portfolio/projects/ml4h_project_1.png'
            ]
        }
    ];
}
