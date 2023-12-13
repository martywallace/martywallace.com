import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Simulation from './components/Simulation';

export async function Clients() {
  return (
    <Section
      fullHeight
      containerClassName="min-h-screen lg:pt-28 pt-6 flex flex-col"
    >
      <SectionTitle title="Who I've Worked With" align="center" />

      <div className="flex-grow relative">
        <Simulation
          clients={[
            { title: 'Simply Wall St' },
            { title: 'Unloan' },
            { title: 'Weaverbirds' },
            { title: 'Mediabrands' },
            { title: 'Teho' },
            { title: 'Georg Jensen' },
          ]}
        />
      </div>
    </Section>
  );
}
