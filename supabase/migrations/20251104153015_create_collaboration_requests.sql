/*
  # Create collaboration_requests table

  1. New Tables
    - `collaboration_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text) - Name of the person requesting collaboration
      - `phone` (text) - Phone number for contact
      - `city` (text) - City of the requester
      - `contact_mode` (text) - Preferred contact method (whatsapp, telegram, or viber)
      - `created_at` (timestamptz) - Timestamp of when the request was submitted
      - `status` (text) - Status of the request (default: 'pending')
  
  2. Security
    - Enable RLS on `collaboration_requests` table
    - Add policy for anyone to insert new collaboration requests
    - Add policy for authenticated users to read all requests
*/

CREATE TABLE IF NOT EXISTS collaboration_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  contact_mode text NOT NULL CHECK (contact_mode IN ('whatsapp', 'telegram', 'viber')),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE collaboration_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit collaboration requests"
  ON collaboration_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all requests"
  ON collaboration_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update requests"
  ON collaboration_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
