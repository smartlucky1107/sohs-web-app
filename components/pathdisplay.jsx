import { Children } from "react";

export function PathDisplay(props) {

  return (
      <div className="flex gap-1">
        {Children.toArray(
          props.path.map((path) => (
            <>
              <a className="text-white" href={path.link}> {path.text} </a>
            </>
          ))
        )}
      </div>
  );
}
