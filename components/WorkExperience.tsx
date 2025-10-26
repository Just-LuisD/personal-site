import { Timeline } from "./ui/timeline";

export function WorkExperience() {
  return (
    <div id="experience" className="py-15">
      <Timeline data={data} />
    </div>
  );
}
const data = [
  {
    title: "January 2025",
    content: (
      <div className="font-normal text-neutral-800 dark:text-neutral-200">
        <p className="mb-6">
          Moved to the Product Team, where I worked across firmware, tooling,
          and UI layers—programming microcontrollers for next-generation radio
          products, developing CLI utilities for internal testing and command
          control, and implementing web-hosted interfaces embedded directly into
          the devices.
        </p>
        <ul className="flex flex-col gap-y-4">
          <li>
            -Built an Angular + Electron cross-platform desktop application to
            configure and control one of our flagship radios.
          </li>
          <li>
            -Programmed embedded C/C++ firmware to manage device communication,
            configuration, and signal processing on custom hardware.
          </li>
          <li>
            -Designed and maintained a Python tool, used internally as a CLI and
            running embedded within our products, for radio upgrades,
            configuration, and validation workflows.
          </li>
          <li>
            -Wrote a Python-based chip screening procedure to test and validate
            the performance of custom ICs used in production.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "January 2023",
    content: (
      <div className="font-normal text-neutral-800 dark:text-neutral-200">
        <p className="mb-6">
          Joined Motorola Solutions as a Software Engineer in the R&D team,
          where I designed automation testing tools, performed signal analysis
          and reverse engineering, and built applications that extended the
          capabilities of our software-defined radios. The highlights of my time
          in this role were:
        </p>
        <ul className="flex flex-col gap-y-4">
          <li>
            -Implementing a WiFi beacon-swarm attack using an off-the-shelf
            software defined radio
          </li>
          <li>
            -Gathered requirements from customers and delivered an effective
            jamming-detection/avoidance feature.
          </li>
          <li>
            -Built automation tooling to orchestrate test racks—coordinating
            signal generators, analyzers, power supplies, and other
            instrumentation.
          </li>
          <li>
            -Applied Python and DSP techniques to analyze and reverse-engineer
            signals, then implemented algorithms that accurately emulated their
            RF signatures.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "December 2022",
    content: (
      <div className="font-normal text-neutral-800 dark:text-neutral-200 mb-15">
        <p className="mb-6">
          Graduated from The University of Texas with a B.S. in Electrical and
          Computer Engineering, specializing in Embedded Systems. Some of my
          favorite courses included:
        </p>
        <ul className="flex flex-col gap-y-4">
          <li>-Software Engineering</li>
          <li>-Computer Architecture</li>
          <li>-Data Structures & Algorithms</li>
          <li>-Embedded Systems</li>
        </ul>
      </div>
    ),
  },
];
