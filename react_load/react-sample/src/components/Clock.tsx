import React, { useState, useEffect } from 'react';

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = 'KEY_LOCALE';

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const savedLocale = localStorage.getitem(KEY_LOCALE);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-labe">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select value={locale} onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">英語</option>
          <option value="ja-JP">日本語</option>
        </select>
      </p>
    </div>
  );
};
