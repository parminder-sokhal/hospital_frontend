// treatment.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";


// Existing pages
import DepressionPage from '../../components/header/treatments/DepressionPage.jsx';
import Psychiatry from '../../components/header/treatments/Psychiatry.jsx';
import Anxiety from '../../components/header/treatments/Anxiety.jsx';
import BipolarDisorder from '../../components/header/treatments/BipolarDisorder.jsx';
import Schizophrenia from '../../components/header/treatments/Schizophrenia.jsx';
import OCD from '../../components/header/treatments/OCD.jsx';
import DeaddictionPrograms from '../../components/header/treatments/DeaddictionPrograms.jsx';
import SexualWellnessServices from '../../components/header/treatments/SexualWellnessServices.jsx';
import PsychiatricCare from '../../components/header/treatments/PsychiatricCare.jsx';

// New imports
import CounsellingandTherapy from '../../components/header/treatments/CounsellingandTherapy.jsx';
import CBT from '../../components/header/treatments/CBT.jsx';
import DBT from '../../components/header/treatments/DBT.jsx';
import IndividualCounselling from '../../components/header/treatments/individualcounselling.jsx';
import StressManagement from '../../components/header/treatments/stressmanagement.jsx';
import BehaviourTherapy from '../../components/header/treatments/behaviourtherapy.jsx';
import RelaxationTherapy from '../../components/header/treatments/relaxationtherapy.jsx';
import SocialSkillsTraining from '../../components/header/treatments/socialskillstraining.jsx';
import MentalHealthIssuesandChildren from '../../components/header/treatments/MentalHealthIssuesandChildren.jsx';
import ADHD from '../../components/header/treatments/ADHD.jsx';
import Autism from '../../components/header/treatments/autism.jsx';
import Incontinence from '../../components/header/treatments/incontinence.jsx';
import BehaviourIssues from '../../components/header/treatments/behaviourissues.jsx';
import ConductDisorder from '../../components/header/treatments/conductdisorder.jsx';
import LearningDisability from '../../components/header/treatments/learningdisability.jsx';
import MotivationEnhancementTherapy from '../../components/header/treatments/motivationenhancementtherapy.jsx';
import RelapsePreventionTherapy from '../../components/header/treatments/relapsepreventiontherapy.jsx';
import MotivationEnhancementByHypnosis from '../../components/header/treatments/motivationenhancementbyhypnosis.jsx';
import SexualWellnessProgram from '../../components/header/treatments/SexualWellnessProgram.jsx';
import PrematureEjaculation from '../../components/header/treatments/prematureejaculation.jsx';
import ErectileDysfunction from '../../components/header/treatments/erectiledysfunction.jsx';
import ReducedOrHighLibido from '../../components/header/treatments/reducedorhighlibido.jsx';
import Anorgasmia from '../../components/header/treatments/anorgasmia.jsx';
import DHATSyndrome from '../../components/header/treatments/DHATsyndrome.jsx';
import SleepClinic from '../../components/header/treatments/SleepClinic.jsx';
import Insomnia from '../../components/header/treatments/insomnia.jsx';
import DisturbedSleep from '../../components/header/treatments/disturbedsleep.jsx';
import NonRefreshingSleep from '../../components/header/treatments/non-refreshingsleep.jsx';
import SleepTalking from '../../components/header/treatments/sleeptalking.jsx';
import SleepWalking from '../../components/header/treatments/sleepwalking.jsx';
import Nightmares from '../../components/header/treatments/nightmares.jsx';
import HeadacheClinic from '../../components/header/treatments/HeadacheClinic.jsx';
import Migraine from '../../components/header/treatments/migraine.jsx';
import TensionHeadache from '../../components/header/treatments/tensionheadache.jsx';
import EpilepsyClinic from '../../components/header/treatments/EpilepsyClinic.jsx';
import Seizure from '../../components/header/treatments/seizure.jsx';
import DeaddictionProgramme from '../../components/header/treatments/De-addictionProgramme.jsx';

const TreatmentRoutes = (
  <>
    {/* Existing routes */}
    <Route path="/depression" element={<DepressionPage />} />
    <Route path="/psychiatry" element={<Psychiatry />} />
    <Route path="/anxiety" element={<Anxiety />} />
    <Route path="/bipolar-disorder" element={<BipolarDisorder />} />
    <Route path="/schizophrenia" element={<Schizophrenia />} />
    <Route path="/ocd" element={<OCD />} />
    <Route path="/De-addictionProgramme" element={<DeaddictionProgramme />} />
    <Route path="/deaddiction" element={<DeaddictionPrograms />} />
    <Route path="/sexual-wellness" element={<SexualWellnessServices />} />
    <Route path="/psychiatric-care" element={<PsychiatricCare />} />

    {/* New routes */}
    <Route path="/counselling-and-therapy" element={<CounsellingandTherapy />} />
    <Route path="/cbt" element={<CBT />} />
    <Route path="/dbt" element={<DBT />} />
    <Route path="/individual-counselling" element={<IndividualCounselling />} />
    <Route path="/stress-management" element={<StressManagement />} />
    <Route path="/behaviour-therapy" element={<BehaviourTherapy />} />
    <Route path="/relaxation-therapy" element={<RelaxationTherapy />} />
    <Route path="/social-skills-training" element={<SocialSkillsTraining />} />

    <Route path="/mental-health-children" element={<MentalHealthIssuesandChildren />} />
    <Route path="/adhd" element={<ADHD />} />
    <Route path="/autism" element={<Autism />} />
    <Route path="/incontinence" element={<Incontinence />} />
    <Route path="/behaviour-issues" element={<BehaviourIssues />} />
    <Route path="/conduct-disorder" element={<ConductDisorder />} />
    <Route path="/learning-disability" element={<LearningDisability />} />
    
    <Route path="/motivation-enhancement" element={<MotivationEnhancementTherapy />} />
    <Route path="/relapse-prevention" element={<RelapsePreventionTherapy />} />
    <Route path="/motivation-by-hypnosis" element={<MotivationEnhancementByHypnosis />} />
    <Route path="/sexual-wellness-program" element={<SexualWellnessProgram />} />

    <Route path="/premature-ejaculation" element={<PrematureEjaculation />} />
    <Route path="/erectile-dysfunction" element={<ErectileDysfunction />} />
    <Route path="/reduced-high-libido" element={<ReducedOrHighLibido />} />
    <Route path="/anorgasmia" element={<Anorgasmia />} />
    <Route path="/dhat-syndrome" element={<DHATSyndrome />} />

    <Route path="/sleep-clinic" element={<SleepClinic />} />
    <Route path="/insomnia" element={<Insomnia />} />
    <Route path="/disturbed-sleep" element={<DisturbedSleep />} />
    <Route path="/non-refreshing-sleep" element={<NonRefreshingSleep />} />
    <Route path="/sleep-talking" element={<SleepTalking />} />
    <Route path="/sleep-walking" element={<SleepWalking />} />
    <Route path="/nightmares" element={<Nightmares />} />

    <Route path="/headache-clinic" element={<HeadacheClinic />} />
    <Route path="/migraine" element={<Migraine />} />
    <Route path="/tension-headache" element={<TensionHeadache />} />
    
    <Route path="/epilepsy-clinic" element={<EpilepsyClinic />} />
    <Route path="/seizure" element={<Seizure />} />
  </>
);

export default TreatmentRoutes;
