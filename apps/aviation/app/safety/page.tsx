import LegalPageTemplate, {
  BulletList,
  BulletItem,
  ContentGrid,
  ContentCard,
  BorderedItem,
  type LegalSection,
} from "@repo/ui/templates/LegalPageTemplate";

const sections: LegalSection[] = [
  {
    id: "commitment",
    title: "Our Safety Commitment",
    variant: "highlight",
    content: (
      <>
        <ContentGrid columns={2}>
          <ContentCard title="Zero Tolerance Policy" variant="gold">
            We maintain a zero tolerance policy for any safety violations or
            compromises. Every aspect of our operations is designed with safety
            as the primary consideration, from aircraft maintenance to crew
            training and flight operations.
          </ContentCard>
          <ContentCard title="Continuous Improvement" variant="gold">
            Our safety management system is built on continuous improvement,
            incorporating the latest industry best practices, technological
            advances, and lessons learned from the global aviation community.
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "regulatory",
    title: "Regulatory Compliance",
    content: (
      <>
        <div className="space-y-4">
          <BorderedItem title="International Standards">
            We comply with all applicable international aviation safety
            standards including ICAO (International Civil Aviation Organization)
            regulations and recommendations.
          </BorderedItem>
          <BorderedItem title="Regional Authorities">
            Our operations are certified and regularly audited by relevant civil
            aviation authorities in all regions where we operate, ensuring full
            compliance with local regulations.
          </BorderedItem>
          <BorderedItem title="Industry Certifications">
            We maintain certifications from leading aviation safety
            organizations and undergo regular third-party safety audits to
            validate our safety management systems.
          </BorderedItem>
        </div>
      </>
    ),
  },
  {
    id: "aircraft-standards",
    title: "Aircraft Safety Standards",
    content: (
      <>
        <ContentGrid columns={3}>
          <ContentCard title="Maintenance Excellence">
            <BulletList>
              <BulletItem>Preventive maintenance programs</BulletItem>
              <BulletItem>Certified maintenance facilities</BulletItem>
              <BulletItem>OEM-approved parts and procedures</BulletItem>
              <BulletItem>Real-time aircraft health monitoring</BulletItem>
            </BulletList>
          </ContentCard>
          <ContentCard title="Fleet Management">
            <BulletList>
              <BulletItem>Modern, well-maintained aircraft</BulletItem>
              <BulletItem>Regular safety inspections</BulletItem>
              <BulletItem>Comprehensive maintenance records</BulletItem>
              <BulletItem>Advanced avionics systems</BulletItem>
            </BulletList>
          </ContentCard>
          <ContentCard title="Safety Equipment">
            <BulletList>
              <BulletItem>Emergency safety equipment</BulletItem>
              <BulletItem>Enhanced weather radar</BulletItem>
              <BulletItem>Collision avoidance systems</BulletItem>
              <BulletItem>Emergency communication systems</BulletItem>
            </BulletList>
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "crew-training",
    title: "Crew Training and Qualification",
    variant: "dark",
    content: (
      <>
        <ContentGrid columns={2}>
          <ContentCard title="Pilot Requirements" variant="dark">
            <p className="mb-3">
              All our pilots meet or exceed the following minimum requirements:
            </p>
            <BulletList>
              <BulletItem>Valid commercial pilot licenses</BulletItem>
              <BulletItem>Type ratings for operated aircraft</BulletItem>
              <BulletItem>Minimum flight hours as required</BulletItem>
              <BulletItem>Current medical certificates</BulletItem>
              <BulletItem>Regular proficiency checks</BulletItem>
              <BulletItem>Simulator training programs</BulletItem>
              <BulletItem>Emergency procedures training</BulletItem>
              <BulletItem>Continuous education requirements</BulletItem>
            </BulletList>
          </ContentCard>
          <ContentCard title="Cabin Crew Standards" variant="dark">
            <p className="mb-3">
              Our cabin crew undergo comprehensive training including:
            </p>
            <BulletList>
              <BulletItem>Safety and emergency procedures</BulletItem>
              <BulletItem>First aid and medical training</BulletItem>
              <BulletItem>Aircraft-specific training</BulletItem>
              <BulletItem>Customer service excellence</BulletItem>
              <BulletItem>Security protocols</BulletItem>
              <BulletItem>Cultural sensitivity training</BulletItem>
              <BulletItem>Regular recertification</BulletItem>
              <BulletItem>Crisis management</BulletItem>
            </BulletList>
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "sms",
    title: "Safety Management System (SMS)",
    content: (
      <>
        <ContentGrid columns={2}>
          <ContentCard title="Risk Assessment" variant="gold">
            <p className="mb-3">
              We employ a comprehensive risk assessment methodology that
              identifies, analyzes, and mitigates potential safety risks before
              they can impact our operations.
            </p>
            <BulletList>
              <BulletItem>Proactive hazard identification</BulletItem>
              <BulletItem>Risk analysis and evaluation</BulletItem>
              <BulletItem>Mitigation strategy development</BulletItem>
              <BulletItem>Continuous monitoring and review</BulletItem>
            </BulletList>
          </ContentCard>
          <ContentCard title="Safety Reporting" variant="gold">
            <p className="mb-3">
              Our non-punitive safety reporting system encourages all personnel
              to report safety concerns, near-misses, and incidents to
              continuously improve our safety performance.
            </p>
            <BulletList>
              <BulletItem>Confidential reporting system</BulletItem>
              <BulletItem>Investigation procedures</BulletItem>
              <BulletItem>Corrective action implementation</BulletItem>
              <BulletItem>Lessons learned dissemination</BulletItem>
            </BulletList>
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "emergency",
    title: "Emergency Procedures",
    content: (
      <>
        <p className="mb-6">
          We maintain comprehensive emergency response procedures that are
          regularly tested and updated. Our crisis management team is available
          24/7 to handle any emergency situations that may arise.
        </p>
        <ContentGrid columns={3}>
          <ContentCard title="Medical Emergencies">
            Trained medical response protocols and equipment on all flights
          </ContentCard>
          <ContentCard title="Weather Incidents">
            Advanced weather monitoring and avoidance procedures
          </ContentCard>
          <ContentCard title="Technical Issues">
            Comprehensive technical emergency procedures and backup systems
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "performance",
    title: "Safety Performance Monitoring",
    variant: "bordered",
    content: (
      <>
        <ContentGrid columns={4}>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-[#D7B46A] mb-2">99.9%</div>
            <div className="text-sm text-gray-400">Safety Record</div>
            <div className="text-xs text-gray-500">Incident-free operations</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-[#D7B46A] mb-2">24/7</div>
            <div className="text-sm text-gray-400">Monitoring</div>
            <div className="text-xs text-gray-500">Continuous safety oversight</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-[#D7B46A] mb-2">100%</div>
            <div className="text-sm text-gray-400">Compliance</div>
            <div className="text-xs text-gray-500">Regulatory adherence</div>
          </div>
          <div className="text-center p-4">
            <div className="text-4xl font-bold text-[#D7B46A] mb-2">0</div>
            <div className="text-sm text-gray-400">Accidents</div>
            <div className="text-xs text-gray-500">Zero tolerance achieved</div>
          </div>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "audits",
    title: "Third-Party Safety Audits",
    content: (
      <>
        <p className="mb-6">
          We regularly undergo independent safety audits by recognized
          third-party organizations to validate our safety management systems
          and operational procedures.
        </p>
        <ContentGrid columns={2}>
          <ContentCard title="Audit Organizations">
            <BulletList>
              <BulletItem>
                International Aviation Safety Assessment (IASA)
              </BulletItem>
              <BulletItem>
                Safety Assessment of Foreign Aircraft (SAFA)
              </BulletItem>
              <BulletItem>IATA Operational Safety Audit (IOSA)</BulletItem>
              <BulletItem>Regional aviation authority audits</BulletItem>
            </BulletList>
          </ContentCard>
          <ContentCard title="Audit Frequency">
            <BulletList>
              <BulletItem>Annual comprehensive safety audits</BulletItem>
              <BulletItem>Quarterly internal safety reviews</BulletItem>
              <BulletItem>Monthly safety performance assessments</BulletItem>
              <BulletItem>Continuous monitoring and improvement</BulletItem>
            </BulletList>
          </ContentCard>
        </ContentGrid>
      </>
    ),
  },
  {
    id: "promise",
    title: "Our Safety Promise",
    variant: "highlight",
    content: (
      <p>
        At Klock Aviation, we promise to never compromise on safety. Every
        flight, every passenger, and every crew member is protected by our
        unwavering commitment to the highest safety standards. We continuously
        invest in the latest safety technologies, training programs, and best
        practices to ensure that safety remains at the forefront of everything
        we do.
      </p>
    ),
  },
  {
    id: "nata",
    title: "NATA Compliance",
    content: (
      <p>
        We adhere to the highest standards set by the National Air
        Transportation Association (NATA), ensuring safety, reliability, and
        professionalism in every flight. This certification demonstrates our
        commitment to industry-leading safety practices and operational
        excellence.
      </p>
    ),
  },
];

export default function SafetyPage() {
  return (
    <LegalPageTemplate
      title="Safety Compliance"
      subtitle="At Klock Aviation, safety is our highest priority. We maintain the most stringent safety standards and compliance protocols to ensure the security and well-being of our passengers, crew, and aircraft operations."
      lastUpdated="January 2026"
      sections={sections}
    />
  );
}