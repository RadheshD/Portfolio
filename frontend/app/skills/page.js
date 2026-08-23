import { Label, ToolWorkbench } from "../components";

export default function Skills() {
  return <main className="simple-page section-wrap toolkit-page"><Label number="04">THE TOOLKIT WORKBENCH</Label><div className="page-title toolkit-arrival"><span className="arrival-stamp">WORKBENCH / OPEN</span><h1>Tools I<br/><span>keep within reach.</span></h1><p>Welcome to the workbench: four shelves of languages, models, infrastructure, and data tools that turn questions into software.</p></div><div className="field-guide"><strong>FIELD GUIDE</strong><span><i className="guide-dot production-dot"/> Field-tested gear from production builds</span><span><i className="guide-dot academic-dot"/> Newer tools from academic projects</span><span>Click or hover a tool to inspect its project trail</span></div><ToolWorkbench /></main>;
}
