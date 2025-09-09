import ProcessIdeaSVG from '@/SVGs/ProcessIdeaSVG.tsx'
import ProcessBlendingSVG from '@/SVGs/ProcessBlendingSVG.tsx'

export const cardsData = [
    {
        id: 1,
        cardTitle: 'Ideas',
        cardDesc: "It's really that simple, most of our ideas come from knowing people who are passionately working for what they believe and trying to make it happen. So we listen.",
        cardIcon: <ProcessIdeaSVG />
    },
    {
        id: 2,
        cardTitle: 'Blending',
        cardDesc: "Matching those ideas with the tools available and even going out on a limb to find something new that fits perfectly in an ever-evolving work.",
        cardIcon: <ProcessBlendingSVG />
    },
]