import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Container, Icon } from "./style";

const Input = ({
  bg,
  bsh,
  br,
  color,
  danger,
  defaultValue,
  error,
  hc,
  header,
  height,
  margin,
  name,
  onChange,
  onBlur,
  padding,
  placeholderColor,
  prefix,
  success,
  suffix,
  type,
  value,
  width,
  focused,
  borderinput,
  placeholder,
  paddinginput
}) => {
  const [mouse, setMouse] = useState(false);
  const [blur, setBlur] = useState(false);
  const [val, setVal] = useState(value);
  const inputRef = useRef();
  useEffect(() => {
    setVal(value);
    if (value) {
      setBlur(true);
    }
  }, [value]);

  const onChangeFunction = (e) => {
    onChange && onChange(e);
    setVal(e?.target?.value);
  };
  const onBlurFunction = (e) => {
    onBlur && onBlur(e);
    !value ? setBlur(false) : setBlur(true);
  };

  return (
    <Container.Wrap width={width} margin={margin}>
      {header && (
        <Container.Header
          hc={hc}
          error={error}
          active={focused ? "true" : blur ? "true" : undefined}
          onClick={() => {
            setBlur(true);
            inputRef?.current?.focus();
          }}
        >
          {header}
        </Container.Header>
      )}
      <Container
        width={width}
        height={height}
        onMouseOver={() => setMouse(true)}
        onMouseLeave={() => setMouse(false)}
        onFocus={() => setBlur(true)}
        onBlur={onBlurFunction}
        padding={padding}
        danger={danger}
        success={success}
        br={br}
        bg={bg}
        bsh={bsh}
        error={error}
        defaultValue={defaultValue}
      >
        {blur && suffix && <Icon height={height}>{suffix}</Icon>}

        <Container.Input
          bg={bg}
          value={val}
          onChange={onChangeFunction}
          height={height}
          onFocus={() => setBlur(true)}
          onBlur={() => setBlur(false)}
          danger={danger}
          success={success}
          color={color}
          placeholderColor={placeholderColor}
          type={type}
          name={name}
          ref={inputRef}
          borderinput={borderinput}
          placeholder={placeholder}
		  paddinginput={paddinginput}
        />
        {prefix && <Icon height={height}>{prefix}</Icon>}

        {error && <Container.Error>{error}</Container.Error>}
      </Container>
    </Container.Wrap>
  );
};

export default Input;
