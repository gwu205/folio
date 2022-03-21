import React from "react"
import { container } from "./project-info.module.scss"

const ProjectInfo = ({ tags, date, link }) => {
  return (
    <aside className={container}>
      <p>
        <strong>Role</strong>
      </p>
      <pre>{tags.replaceAll(/, /gi, "\n")}</pre>
      <p>
        <strong>Date</strong>
      </p>
      <p>{date}</p>
      {link && (
        <a
          href={`${link}`}
          rel="noopen noreferrer"
          target="_blank"
          title="View live project"
        >
          View live project
        </a>
      )}
    </aside>
  )
}

export default ProjectInfo
