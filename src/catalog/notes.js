import FlavouredSVG from '../svg/flavoured.svg'
import WoodySVG from '../svg/woody.svg'
import CaramelSVG from '../svg/caramel.svg'
import CoconutSVG from '../svg/coconut.svg'
import CerealSVG from '../svg/cereal.svg'
import RosterSVG from '../svg/roster.svg'
import HazelnutSVG from '../svg/hazelnut.svg';
import VanillaSVG from '../svg/vanilla.svg';
import BiscuitySVG from '../svg/biscuity.svg';
import BalancedSVG from '../svg/balanced.svg';
import FloralSVG from '../svg/floral.svg';
import MaltedSVG from '../svg/malted.svg';
import SpicySVG from '../svg/spicy.svg';
import FruitSvg from '../svg/fruity.svg';
import CocoaSVG from '../svg/cocoa.svg';

const boldRoastedNotes = {
    svg: FlavouredSVG,
    tr: 'сміливі смажені ноти'
};

const fruit = {
    svg: FruitSvg,
    tr: 'фруктовий'
};

const toastedCereal = {
    svg: MaltedSVG,
    tr: 'Підсмажені пластівці'
};

const biscuity = {
    svg: BiscuitySVG,
    tr: 'бісквіт'
};

const cereal = {
    svg: CerealSVG,
    tr: 'зерно'
};

const flavoured = {
    svg: FlavouredSVG,
    tr: 'ароматна'
};

const caramel = {
    svg: CaramelSVG,
    tr: 'карамель'
};

const woody = {
    svg: WoodySVG,
    tr: 'деревина'
};

const coconut = {
    svg: CoconutSVG,
    tr: 'кокос'
};

const roster = {
    svg: RosterSVG,
    tr: 'ростер'
};

const hazelnut = {
    svg: HazelnutSVG,
    tr: 'лісний горіх'
};

const vanilla = {
    svg: VanillaSVG,
    tr: 'ванільний'
};

const intense = {
    svg: RosterSVG,
    tr: 'інтенсивний'
};

const balanced = {
    svg: BalancedSVG,
    tr: 'збалансований'
};

const floral = {
    svg: FloralSVG,
    tr: 'квітковий'
};

const smoky = {
    svg: FlavouredSVG,
    tr: 'димне дерево'
}

const malted = {
    svg: MaltedSVG,
    tr: 'солод'
}

const spicy = {
    svg: SpicySVG,
    tr: 'пряний'
}

const cocoa = {
    svg: CocoaSVG,
    tr: 'кокао'
}
export const СapsuleNotes = {
    buenosAires: ['cereal', 'caramel'],
    shanghaiLungo: [],
    viennaLungo: ['cereal', 'malted'],
    tokyoVivaltoLungo: ['roster', 'floral', 'flavoured'],
    stockholmLungo: ['roster', 'malted'],
    capetownEnvivoLungo: ['roster', 'woody', 'caramel'],
    parisEspresso: ['biscuity', 'cereal'],
    istanbulEspresso: ['fruit', 'roster'],
    rioDeJaneiroEspresso: ['spicy', 'cereal'],
    capriccio: ['cereal', 'balanced'],
    caramello: ['caramel', 'flavoured'],
    chiaro:  ['balanced', 'caramel', 'biscuity', 'intense'],
    cioccolatino: ['flavoured'],
    colombia: [],
    corto: ['intense', 'spicy'],
    cosi: ['cereal', 'fruit'],
    ethiopia: ['floral', 'fruit'],
    indonesia: ['intense', 'woody'],
    frostedCaramelNuts: ['flavoured', 'caramel'],
    nicaragua: ['cereal'],
    nocciola: ['flavoured', 'biscuity', 'hazelnut'] ,
    peruOrganic: ['fruit', 'toastedCereal'],
    scuro: ['roster', 'balanced'],
    seasonalDelightSpices: ['flavoured'],
    vaniglia: ['flavoured', 'vanilla'],
};

export default {cocoa, boldRoastedNotes, fruit, flavoured, caramel, cereal, woody, coconut, roster, hazelnut, biscuity, vanilla, intense, balanced, floral, smoky, malted, spicy, toastedCereal};